function ScratchWallpaperBackground({color=false, classNames}) {

  const computedClassNames = [...classNames, (color ? "background-scratch-wallpaper-color" : "background-scratch-wallpaper")].join(" ")

  return (
    <div className={computedClassNames}/>
  )

}

export default ScratchWallpaperBackground
