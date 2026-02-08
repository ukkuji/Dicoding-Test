const getPhotosDataPromise = () => {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((photos) => resolve(photos))
      .catch((error) => reject(error));
  });
};

// Usage
getPhotosDataPromise()
  .then((photosData) => {
    console.log(photosData.slice(0, 5));
  })
  .catch((error) => {
    console.error("Error fetching photos:", error);
  });
