import { Person } from '../components/cards/People';

// export const imageSource = (person: Person) => {
//   if (person.photo || person.image) {
//     return person.photo ? person.photo.data : person.image.url;
//   } else {
//     return "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";
//   }
// };
export const imageSource = (person: Person) => {
  if (typeof person.photo === 'string') {
    // Assuming person.photo is a URL string
    return person.photo;
  } else if (person.photo && 'data' in person.photo) {
    // Assuming person.photo is an object with a 'data' property
    const photoWithImageData = person.photo as { data: string }; // Asserting the type
    return photoWithImageData.data;
  } else if (person.image && 'url' in person.image) {
    // Assuming person.image is an object with a 'url' property
    return person.image.url;
  } else {
    return "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";
  }
};