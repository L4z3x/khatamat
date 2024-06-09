import '../style/profile.css'

export default function Profile(){
    const con = (e)=> console.log(e.target)

return(
    <div className='profile-background'>
        <div className='profile-background-pic'>
            <div className='profile-img-support'>
                <div className='profile-img-div'>
                    <img src={require('../img/Default-Profile-pic.jpg')}className='profile-img'/>
                </div>
            </div>
        </div>
        <div className='profile-information'>
            <div className='info-div'>
                <ul className='ul-info'>
                    <li>
                        <h3 className='h3-fieldtitle'>USER NAME :</h3>
                        <h2 className='h2-fieldtext'>moussa mousselmel</h2>
                    </li>
                    <li>
                        <h3 className='h3-fieldtitle'>EMAIL :</h3>
                        <h2 className='h2-fieldtext'>moussamousselmel@gmail.com</h2>
                    </li>
                </ul>
                <ul className='ul-info'>
                    <li>
                        <h3 className='h3-fieldtitle'>COUNTRY :</h3>
                        <h2 className='h2-fieldtext'>Palestinesfadfdafadfadfadfadfadf</h2>
                    </li>
                    <li>
                        <h3 className='h3-fieldtitle'>PASSWORD :</h3>
                        <h2 className='h2-fieldtext'>.........</h2>
                    </li>
                </ul>
            </div>
            <div className='info-div'>
                <ul className='ul-bio'>
                    <li>
                        <h3 className='h3-fieldtitle'>BIO :</h3>
                        <p className='p-fieldtext'>
                            Describe yourself here Describe yourself here
                            Dessadcribe yourself here Describe yourself here
                            Describe yourself here Describe yourself here
                            Describe yourself here Describe yourself here.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div> 
)
}