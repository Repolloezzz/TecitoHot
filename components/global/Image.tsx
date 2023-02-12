import Image from "next/image";
import { useState } from "react";
import type { ImageProps } from "next/image";

const ImageBetter = ({ ...props }: ImageProps) => {
  const [srcState, setSrc] = useState(props.src);
  return (
    <Image
      {...props}
      alt={`${props.alt}`}
      src={srcState}
      onError={() => setSrc("/imgNotFound.webp")}
    />
  );
};

export default ImageBetter;
