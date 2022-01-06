async function readFileAsDataURL(file) {
  let result_base64 = await new Promise((resolve) => {
      let fileReader = new FileReader();
      fileReader.onload = (e) => resolve(fileReader.result);
      fileReader.readAsDataURL(file);
  });

  return result_base64;
}

export {
  readFileAsDataURL
}