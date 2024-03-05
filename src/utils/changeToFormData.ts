export const changeToFormData = (data: any) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    const value = data[key];

    if (value !== undefined) {
      // 파일이나 이미지가 포함된 필드인지 확인
      if (value instanceof File || value instanceof Blob) {
        // 파일/이미지는 그대로 FormData에 추가
        formData.append(key, value, (value as File).name);
      } else {
        // 나머지 데이터는 JSON 문자열로 변환하여 추가
        formData.append(key, typeof value === 'object' ? JSON.stringify(value) : value);
      }
    }
  });
  return formData;
};
