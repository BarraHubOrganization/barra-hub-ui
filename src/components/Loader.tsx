import React from "react";

interface Props {
  /** Texto a ser exibido dentro do botão. */
  loading: boolean;
}

export default function Loader({ loading }: Props) {
  return (
    <div className="flex items-center justify-center">
      {loading && (
           <div className="w-8 h-8 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-primary"></div>
      )}
    </div>
  );
}
