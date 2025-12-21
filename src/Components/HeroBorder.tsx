interface HeroBorderProps {
    style?: string
}

const HeroBorder = ({ style }:HeroBorderProps) => {
  return (
    <div className={`border-r border-gray-400/85 h-17 mx-4 ${style}`}/>
  )
}

export default HeroBorder