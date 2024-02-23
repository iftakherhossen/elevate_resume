import React from 'react';
import { documentation_data } from '../../assets/index';

const FAQ = () => {
    return (
        <section className="bg-white h-full">
            <div className="container mx-auto w-full md:w-[60%] py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 md:my-2">
                    <div>
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/faq-6262981-5253240.png" alt="faq" className="h-fixed object-fit" />
                    </div>
                    <div className="flex flex-col justify-center items-center px-2 md:px-0">
                        {
                            documentation_data.faqs.map(({ ques, ans }) => <div className="collapse collapse-plus text-black" key={ques}>
                                <input type="radio" name="my-accordion-3" defaultChecked /> 
                                <div className="collapse-title text-xl font-semibold text-black">{ques}</div>
                                <div className="collapse-content"> 
                                    <p className="text-slate-500 font-medium">{ans}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;