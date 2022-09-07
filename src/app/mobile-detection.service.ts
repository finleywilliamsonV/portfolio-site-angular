import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class MobileDetectionService {

    private _hasTouchScreen: boolean = false

    public get isMobile(): boolean {
        return this._hasTouchScreen
    }

    constructor() {

        if ('maxTouchPoints' in navigator) {
            this._hasTouchScreen = navigator.maxTouchPoints > 0
        } else if ('msMaxTouchPoints' in navigator) {
            this._hasTouchScreen = (navigator as any).msMaxTouchPoints > 0
        } else {
            const mQ = matchMedia('(pointer:coarse)')
            if (mQ && mQ.media === '(pointer:coarse)') {
                this._hasTouchScreen = !!mQ.matches
            } else if ('orientation' in window) {
                this._hasTouchScreen = true // deprecated, but good fallback
            } else {
                // Only as a last resort, fall back to user agent sniffing
                const UA = navigator.userAgent
                this._hasTouchScreen = (
                    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
                    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
                )
            }
        }
    }
}
