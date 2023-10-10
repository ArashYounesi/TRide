export function _tgWebApp() {
    return window?.Telegram?.WebApp ?? false
}

export function showBackButton() {
    const tgWebApp = _tgWebApp()
    if (tgWebApp) {
        const {BackButton} = tgWebApp
        BackButton.show()
    }
}

export function hideBackButton() {
    const tgWebApp = _tgWebApp()
    if (tgWebApp) {
        const {BackButton} = tgWebApp
        BackButton.hide()
    }
}
