import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../../context/AuthProvider';

const BookingPackages = ({ _id }) => {
    const {user} = useContext(AuthContext)
    // console.log(user)
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const ticket = form.tickets.value;
        const message = form.message.value;
        const date = form.date.value;
        form.reset();

        const bookingInfo = {
            name,
            email,
            phone,
            ticket,
            message,
            date 
        }
        // console.log(bookingInfo)
        fetch('http://localhost:5000/booking', {
            method: 'POST',
             headers: {
                'content-type' : 'application/json'
             },
             body: JSON.stringify(bookingInfo)
         })
         .then( res => res.json())
         .then(data => {
            // console.log(data.acknowledge)
           if(data.acknowledged){
            // setProduct([]);
            toast.success('booking successfully')
            navigate('/myBookings')
           }
           else{
            toast.error(data.message)
           }
         })
    }
    // console.log(_id)
    return (
        <div>
            <h2 className='text-3xl mt-7 text-center font-bold'>Book This Tour</h2>
            <form onSubmit={handleSubmit} className="p-8">
                <div className='login-form flex justify-center mt-5 mb-5'>
                    <input className='p-4 w-96 rounded-xl' type="text" name='name' id='' placeholder='Enter Your Name' defaultValue={user.displayName} required/>
                </div>
                <div className='login-form flex justify-center mt-5 mb-5'>
                    <input className='p-4 w-96 rounded-xl' type="email" name='email' id='' placeholder='Enter Your mail' defaultValue={user.email} />
                </div>
                <div className='login-form flex justify-center mt-5 mb-5'>
                    <input className='p-4 w-96 rounded-xl' type="text" name='phone' id='' placeholder='Phone' required />
                </div>
                <div className='login-form flex justify-center mt-5 mb-5'>
                    <input className='p-4 w-96 rounded-xl' type="text" name='tickets' id='' placeholder='Tickets' required/>
                </div>
                <div className='login-form flex justify-center mt-5 mb-5'>
                    <input className='p-4 w-96 rounded-xl' type="text" name='date' id='' placeholder='dd/mm/yy' required/>
                </div>
                <div className='login-form flex justify-center mt-5 mb-10'>
                    <textarea className='rounded-xl p-5' name="message" id="" cols="44" rows="7" placeholder='Message'></textarea>
                </div>
                <div className='flex justify-center mb-10'>
                    <button className='submit-button btn bg-orange-700 border-none w-80'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default BookingPackages;