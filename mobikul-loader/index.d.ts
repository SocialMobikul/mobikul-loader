declare module 'mobikul-loader' {
    import { Component } from 'react';
  
    export interface MobikulLoaderProps {
      title: string;
      loading: boolean;
    }
  
    export class MobikulLoader extends Component<MobikulLoaderProps> {}
  }