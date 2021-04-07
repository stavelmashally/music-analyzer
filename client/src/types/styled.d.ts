import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    body: string
    text: string
    border: string
    toggleBorder: string
    gradient: string
    secondary?: string
  }
}
