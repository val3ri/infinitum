import AppKit
import ImageIO
import UniformTypeIdentifiers

let arguments = CommandLine.arguments
guard arguments.count == 4, let size = Int(arguments[2]) else {
    fputs("Usage: swift make-square-icon.swift input.png size output.png\n", stderr)
    exit(1)
}

let inputURL = URL(fileURLWithPath: arguments[1])
let outputURL = URL(fileURLWithPath: arguments[3])

guard let image = NSImage(contentsOf: inputURL),
      let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
    fputs("Could not read input image.\n", stderr)
    exit(1)
}

let bytesPerPixel = 4
let bytesPerRow = size * bytesPerPixel
var pixels = [UInt8](repeating: 0, count: size * size * bytesPerPixel)

guard let context = CGContext(
    data: &pixels,
    width: size,
    height: size,
    bitsPerComponent: 8,
    bytesPerRow: bytesPerRow,
    space: CGColorSpaceCreateDeviceRGB(),
    bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
) else {
    fputs("Could not create bitmap context.\n", stderr)
    exit(1)
}

context.clear(CGRect(x: 0, y: 0, width: size, height: size))
context.interpolationQuality = .high

let padding = CGFloat(size) * 0.08
let available = CGFloat(size) - padding * 2
let sourceWidth = CGFloat(cgImage.width)
let sourceHeight = CGFloat(cgImage.height)
let scale = min(available / sourceWidth, available / sourceHeight)
let drawWidth = sourceWidth * scale
let drawHeight = sourceHeight * scale
let rect = CGRect(
    x: (CGFloat(size) - drawWidth) / 2,
    y: (CGFloat(size) - drawHeight) / 2,
    width: drawWidth,
    height: drawHeight
)

context.draw(cgImage, in: rect)

guard let outputImage = context.makeImage(),
      let destination = CGImageDestinationCreateWithURL(outputURL as CFURL, UTType.png.identifier as CFString, 1, nil) else {
    fputs("Could not create output image.\n", stderr)
    exit(1)
}

CGImageDestinationAddImage(destination, outputImage, nil)

guard CGImageDestinationFinalize(destination) else {
    fputs("Could not write output image.\n", stderr)
    exit(1)
}

print("Wrote \(outputURL.path) (\(size)x\(size))")
