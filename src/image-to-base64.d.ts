declare module 'image-to-base64/browser' {
    const imageToBase64: (image: string) => Promise<string>;
    export default imageToBase64;
  }