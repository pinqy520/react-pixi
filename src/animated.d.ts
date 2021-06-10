import * as React from 'react';
import {_ReactPixi} from './index'

type AnimatedComponent<T extends ElementType> = React.ForwardRefExoticComponent<AnimatedProps<ComponentPropsWithRef<T>>>;

// components
export const Text: AnimatedComponent<React.FC<_ReactPixi.IText>>;
export const Sprite: AnimatedComponent<React.FC<_ReactPixi.ISprite>>;
export const Container: AnimatedComponent<React.FC<_ReactPixi.IContainer>>;
export const Graphics: AnimatedComponent<React.FC<_ReactPixi.IGraphics>>;
export const BitmapText: AnimatedComponent<React.FC<_ReactPixi.IBitmapText>>;
export const NineSlicePlane: AnimatedComponent<React.FC<_ReactPixi.INineSlicePlane>>;
export const ParticleContainer: AnimatedComponent<React.FC<_ReactPixi.IParticleContainer>>;
export const TilingSprite: AnimatedComponent<React.FC<_ReactPixi.ITilingSprite>>;
export const SimpleRope: AnimatedComponent<React.FC<_ReactPixi.ISimpleRope>>;
export const SimpleMesh: AnimatedComponent<React.FC<_ReactPixi.ISimpleMesh>>;
export const AnimatedSprite: AnimatedComponent<React.FC<_ReactPixi.IAnimatedSprite>>;