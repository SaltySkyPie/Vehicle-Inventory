import { ApolloProvider } from '@app/graphql/ApolloProvider'
import { PageLayout } from '@app/modules/common/components/Layout'
import theme from '@app/modules/common/utils/theme'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vehicle Inventory',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <PageLayout>{children}</PageLayout>
          </ThemeProvider>
        </ApolloProvider>
      </body>
    </html>
  )
}
