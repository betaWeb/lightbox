export function debounce(callback: Function, delay: number): Function {
    let timer;

    return function() {
        let args = arguments
        let context = this

        clearTimeout(timer)

        timer = setTimeout(() => {
            callback.apply(context, args)
        }, delay)
    }
}

export function getImageBoundings (image: HTMLImageElement|HTMLElement, offset: number = 0): ImageBoundings {
    let naturalWidth = 0
    let naturalHeight = 0
    let offsetWidth = 0
    let offsetHeight = 0

    if (image.constructor === HTMLImageElement) {
        naturalWidth = image.naturalWidth
        naturalHeight = image.naturalHeight
    } else {
        naturalWidth = image.clientWidth
        naturalHeight = image.clientHeight
    }

    const { width, height, orientation } = aspectRatioFit(
        naturalWidth,
        naturalHeight,
        window.innerWidth,
        window.innerHeight
    ) as AspectRatio

    switch (orientation) {
        case 'landscape':
            offsetWidth = offset
            break
        case 'portrait':
            offsetHeight = offset
            break
        case 'even':
            offsetWidth = offset
            offsetHeight = offset
            break
    }

    return {
        width: width - (2 * offsetWidth),
        height: height - (2 * offsetHeight)
    }
}

export function aspectRatioFit(
    srcWidth: number,
    srcHeight: number,
    maxWidth: number,
    maxHeight: number
): AspectRatio {
    let ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight)
    let orientation = 'even'

    if (srcWidth > srcHeight) {
        orientation = 'landscape'
    } else if (srcWidth < srcHeight) {
        orientation = 'portrait'
    }

    let width = srcWidth * ratio
    let height = srcHeight * ratio

    if (width <= maxWidth || height <= maxHeight) {
        orientation = 'even'
    }

    return {
        ratio,
        width,
        height,
        orientation
    }
}