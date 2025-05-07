import locator from '../images.png'
import fuji from  '../fuji.jpeg'
export default function Entry(props){
 return (
  <>
   <article>
    <img src = {props.image} alt = 'photo' className ='picture' />
    <aside className='content'>
     <img src = {locator} alt ='here in' className='locate' /><small>{props.country}</small>
     <h4>{props.site}</h4>
     <small>{props.date}</small>
     <p className = 'paragraph'>{props.note} </p>
    </aside>
   </article>
  </>
 );
}
