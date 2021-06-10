import Reconciler from 'react-reconciler'
import hostconfig from './hostconfig'

export const PixiFiber = Reconciler(hostconfig)

PixiFiber.injectIntoDevTools({
  bundleType: process.env.NODE_ENV !== 'production' ? 1 : 0,
  version: __REACT_DOM_VERSION__,
  rendererPackageName: __PACKAGE_NAME__,
  findHostInstanceByFiber: PixiFiber.findHostInstance,
})
