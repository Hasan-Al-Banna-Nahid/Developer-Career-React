const FeaturedJobsData = async () => {
  try {
    const res = await fetch("../../jobdescription.json");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export default FeaturedJobsData;
