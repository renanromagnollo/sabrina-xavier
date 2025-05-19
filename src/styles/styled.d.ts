import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string

        fonts: {
            h1: {
                fontFamily: string
                fontStyle: string
                fontWeight: number
                fontSize: string
                lineHeight: string
            }
            h2: {
                fontFamily: string
                fontStyle: string
                fontWeight: number
                fontSize: string
                lineHeight: string
            }
            h3: {
                fontFamily: string
                fontStyle: string
                fontWeight: number
                fontSize: string
                lineHeight: string
            }
            h4: {
                fontFamily: string
                fontStyle: string
                fontWeight: number
                fontSize: string
                lineHeight: string
            }
            h5: {
                fontFamily: string
                fontStyle: string
                fontWeight: number
                fontSize: string
                lineHeight: string
            }
            h6: {
                fontFamily: string
                fontStyle: string
                fontWeight: number
                fontSize: string
                lineHeight: string
            }

            p: {
                fontFamily: string
                fontStyle: string
                fontWeight: number
                fontSize: string
                lineHeight: string
            }

        }

        colors: {
            primary: {
                default: string
                light: string
                dark: string
            }
            secundary: {
                default: string
                light: string
                dark: string
            }

            actions: {
                sucess: string
                danger: string
                disabled: string
            }
            dark: {
                default: string
                light: string
                //   dark: string
            }
            light: {
                default: string
                dark: string
            }
            background: string
            //   text: string    

        }
    }
}