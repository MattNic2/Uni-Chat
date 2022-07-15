function Input (props) {
  return (
    <input {...props} className={"bg-biome_dark-brighter text-biome_text p-2 border border-biome_dark-brightest rounded-md block "+props.className} />
  );
}

export default Input;