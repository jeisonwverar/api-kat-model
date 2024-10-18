export const getGalery = (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (id) {
    return res.send(`<h1> el id : ${id}</h1>`);
  } else {
    return res.send('<h1>image get</h1>');
  }
  try {
  } catch (error) {}
};
export const createGalery = (req, res) => {
  try {
  } catch (error) {}
};
export const updateGalery = (req, res) => {
  try {
  } catch (error) {}
};
export const deleteGalery = (req, res) => {
  re;
  try {
  } catch (error) {}
};
