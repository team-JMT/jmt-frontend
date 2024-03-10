import { useCallback, useEffect, useRef, useState } from 'react';

type UseFileInputProps = {
  accept: string;
  multiple?: boolean;
};

function useFileInput({ accept, multiple = false }: UseFileInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [prevSelectedFiles, setPrevSelectedFiles] = useState<FileList | null>(null); // 이전에 선택한 파일 목록을 저장
  const selectedFile = Array.prototype.slice.call(selectedFiles ?? []) as File[];

  const resetFiles = useCallback(() => {
    setSelectedFiles(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }, []);

  const openFilePicker = useCallback(() => {
    if (inputRef.current) {
      const dt = new DataTransfer();
      if (inputRef.current.files) {
        Array.from(inputRef.current.files).forEach((file) => dt.items.add(file));
      }
      setPrevSelectedFiles(dt.files); // 이전에 선택한 파일 목록을 저장
      inputRef.current.value = ''; // change 이벤트를 강제로 발생시킵니다.
    }
    inputRef.current?.click();
  }, []);

  const onFileChange = useCallback(
    (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const filesArray = Array.from(target.files);
        const newFileList = new DataTransfer();
        filesArray.forEach((file) => newFileList.items.add(file));
        setSelectedFiles(newFileList.files);
      } else {
        setSelectedFiles(prevSelectedFiles); // 파일 선택기에서 취소를 클릭하면 이전에 선택한 파일 목록을 복원합니다.
      }
    },
    [prevSelectedFiles],
  );

  // 컴포넌트가 마운트될 때 input 태그를 돔에 추가하고, 언마운트될 때 제거합니다.
  useEffect(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.style.display = 'none';
    input.accept = accept;
    input.multiple = multiple;
    input.addEventListener('change', onFileChange);

    document.body.appendChild(input);

    inputRef.current = input;

    return () => {
      document.body.removeChild(input);
    };
  }, [accept, multiple, onFileChange]);

  return {
    openFilePicker,
    selectedFiles: selectedFile,
    resetFiles,
  };
}

export default useFileInput;
