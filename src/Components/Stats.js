export default function Stats({number, packedItems}) {

    const percentage = Math.round(( packedItems / number ) * 100);

    if (!number) return (<p className='stats'>Start Adding Your Travel Items 🤞</p>)

  return(
    <footer className='stats'>
  <em>  {percentage === 100 ? "Ready To Go ✈" : ` you have ${number} items in your list, and you've packed
   ${packedItems},  ${percentage > 0 ? percentage : "0"}% of the items  packed`}</em> 
    </footer>
  )
}