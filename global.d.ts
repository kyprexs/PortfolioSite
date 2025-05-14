import { Object3D } from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { object: Object3D };
    }
  }
}
export {};