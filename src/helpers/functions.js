async function readFileAsDataURL(file) {
  let result_base64 = await new Promise((resolve) => {
      let fileReader = new FileReader();
      fileReader.onload = (e) => resolve(fileReader.result);
      fileReader.readAsDataURL(file);
  });

  console.log(result_base64); // aGV5IHRoZXJl...

  return result_base64;
}

export {
  readFileAsDataURL
}