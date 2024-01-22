export const imageSource = (person: Person) => {
  console.log(person);
  if (person.photo || person.image) {
    return person.photo ? person.photo.data : person.image.url;
  } else {
    return "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";
  }
};