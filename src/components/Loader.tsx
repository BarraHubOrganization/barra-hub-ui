import React from "react";

interface Props {
  /** Texto a ser exibido dentro do botão. */
  loading: boolean;
}

export default function Loader({ loading }: Props) {
  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-5 h-screen w-full flex items-center justify-center z-50">
          <div className="w-8 h-8 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-primary"></div>
        </div>
      )}
    </>
  );
}
