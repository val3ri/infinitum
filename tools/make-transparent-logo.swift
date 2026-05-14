import AppKit
import ImageIO
import UniformTypeIdentifiers

let arguments = CommandLine.arguments
guard arguments.count == 3 else {
    fputs("Usage: swift make-transparent-logo.swift input.jpg output.png\n", stderr)
    exit(1)
}

let inputURL = URL(fileURLWithPath: arguments[1])
let outputURL = URL(fileURLWithPath: arguments[2])

guard let image = NSImage(contentsOf: inputURL),
      let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
    fputs("Could not read input image.\n", stderr)
    exit(1)
}

let width = cgImage.width
let height = cgImage.height
let bytesPerPixel = 4
let bytesPerRow = width * bytesPerPixel
var pixels = [UInt8](repeating: 0, count: width * height * bytesPerPixel)

guard let context = CGContext(
    data: &pixels,
    width: width,
    height: height,
    bitsPerComponent: 8,
    bytesPerRow: bytesPerRow,
    space: CGColorSpaceCreateDeviceRGB(),
    bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
) else {
    fputs("Could not create bitmap context.\n", stderr)
    exit(1)
}

context.draw(cgImage, in: CGRect(x: 0, y: 0, width: width, height: height))

var minX = width
var minY = height
var maxX = 0
var maxY = 0

for y in 0..<height {
    for x in 0..<width {
        let index = (y * width + x) * bytesPerPixel
        let r = Int(pixels[index])
        let g = Int(pixels[index + 1])
        let b = Int(pixels[index + 2])
        let maxChannel = max(r, g, b)
        let minChannel = min(r, g, b)
        let saturation = maxChannel - minChannel

        if minChannel > 226 && saturation < 42 {
            let alpha: Int
            if minChannel >= 248 {
                alpha = 0
            } else {
                alpha = max(0, min(255, (248 - minChannel) * 12))
            }

            pixels[index + 3] = UInt8(alpha)
            if alpha < 255 {
                pixels[index] = UInt8((r * alpha) / 255)
                pixels[index + 1] = UInt8((g * alpha) / 255)
                pixels[index + 2] = UInt8((b * alpha) / 255)
            }
        }

        if pixels[index + 3] > 20 {
            minX = min(minX, x)
            minY = min(minY, y)
            maxX = max(maxX, x)
            maxY = max(maxY, y)
        }
    }
}

guard minX <= maxX && minY <= maxY else {
    fputs("No visible logo pixels found.\n", stderr)
    exit(1)
}

let padding = max(24, Int(Double(max(maxX - minX, maxY - minY)) * 0.04))
minX = max(0, minX - padding)
minY = max(0, minY - padding)
maxX = min(width - 1, maxX + padding)
maxY = min(height - 1, maxY + padding)

let croppedWidth = maxX - minX + 1
let croppedHeight = maxY - minY + 1
let croppedBytesPerRow = croppedWidth * bytesPerPixel
var cropped = [UInt8](repeating: 0, count: croppedWidth * croppedHeight * bytesPerPixel)

for y in 0..<croppedHeight {
    let sourceStart = ((minY + y) * width + minX) * bytesPerPixel
    let targetStart = y * croppedBytesPerRow
    cropped[targetStart..<(targetStart + croppedBytesPerRow)] = pixels[sourceStart..<(sourceStart + croppedBytesPerRow)]
}

guard let croppedContext = CGContext(
    data: &cropped,
    width: croppedWidth,
    height: croppedHeight,
    bitsPerComponent: 8,
    bytesPerRow: croppedBytesPerRow,
    space: CGColorSpaceCreateDeviceRGB(),
    bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
), let outputImage = croppedContext.makeImage(),
   let destination = CGImageDestinationCreateWithURL(outputURL as CFURL, UTType.png.identifier as CFString, 1, nil) else {
    fputs("Could not create output image.\n", stderr)
    exit(1)
}

CGImageDestinationAddImage(destination, outputImage, nil)

guard CGImageDestinationFinalize(destination) else {
    fputs("Could not write output image.\n", stderr)
    exit(1)
}

print("Wrote \(outputURL.path) (\(croppedWidth)x\(croppedHeight))")
