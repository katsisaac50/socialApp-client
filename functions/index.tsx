export const imageSource = (person: Person) => {
  if (person.photo || person.image) {
    return person.photo ? person.photo.data : person.image.url;
  } else {
    return "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";
  }
};