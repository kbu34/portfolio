import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>blah blah blah</p>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper lorem eu consectetur pulvinar. Suspendisse cursus enim id odio convallis, quis interdum odio pellentesque. Integer feugiat lacus vitae turpis ullamcorper egestas. Cras ligula tellus, imperdiet sit amet auctor a, auctor tempor nunc. Sed magna leo, mollis a rhoncus et, auctor et lectus. Sed gravida non sapien sit amet semper. In consectetur est nisi. Sed vitae posuere eros, ut accumsan nunc. Proin nec lacus aliquam, dapibus sem sed, ullamcorper lectus. Vestibulum quis metus in justo efficitur maximus at non arcu. Curabitur et erat pretium, dapibus leo vel, fringilla odio. Aliquam nec nisi neque. Mauris finibus sem sit amet pharetra sodales. Fusce vitae ligula fringilla, volutpat libero non, dignissim felis. Donec pellentesque, leo non vulputate venenatis, tellus neque volutpat erat, in laoreet ipsum nunc at magna. Phasellus ultrices enim sit amet dui lobortis ultrices at tempor eros. </p>
                <p className='py-2 text-gray-600'>Curabitur non pellentesque velit. In ut vestibulum ipsum, eget maximus lorem. Morbi placerat sagittis lacinia. Integer sollicitudin, tortor quis tristique elementum, nunc lectus ultricies erat, eu consectetur urna odio sit amet magna. Ut a sem auctor, convallis sem eget, euismod tellus. Donec varius eget urna non tempor. Phasellus ultricies, diam in pulvinar porttitor, eros nisl sollicitudin sapien, eu scelerisque massa dolor ac elit. Aenean a erat non odio iaculis sollicitudin. Cras erat ex, semper id sem nec, pretium rutrum elit. Nulla tempus viverra mi, sed consectetur magna faucibus at. Suspendisse tempor dui facilisis mi euismod, et rhoncus tortor hendrerit. Donec placerat mi ac orci gravida, sit amet commodo sem suscipit. Fusce sagittis, dui ut maximus hendrerit, lorem arcu facilisis nunc, ac condimentum nibh elit id nisi. Suspendisse potenti. Morbi pretium consectetur lacus, vitae cursus eros facilisis nec. Morbi nunc sapien, ultrices eu eleifend sed, vulputate at ante.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://picjumbo.com/wp-content/uploads/new-macbook-pro-with-iphone-1080x1620.jpg" alt="" width={"3000"} height={"1500"}/>
            </div>
        </div>    
    </div>
  )
}

export default About