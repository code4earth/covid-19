import { useLinking as useLinkingOrig } from '@react-navigation/native'
import { Linking } from 'expo'

export function useLinking(containerRef) {
  return useLinkingOrig(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'home',
          Links: 'links',
          Settings: 'settings',
        },
      },
    },
  })
}
