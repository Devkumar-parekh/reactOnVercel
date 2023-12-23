const Parallax = ({
  backgroundImage = "./assets/images/img_parallax.png",
  height = "100vh",
}) => {
  return (
    <>
      {console.log(backgroundImage, "backgroundImage")}
      <div
        style={{
          height: height,
          backgroundImage: `url('${backgroundImage}')`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </>
  );
};
export default Parallax;
