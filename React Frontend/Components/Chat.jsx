import React, { useState } from 'react';
import Navbar from '../Components/Navbar'; 
import { Link } from 'react-router-dom';
import './tailwindcss-colors.css';
import './style.css';

const Chat = () => {
    const [activeConversation, setActiveConversation] = useState(null);

    const handleConversationClick = (conversationId) => {
        setActiveConversation(conversationId);
    };

    const [isMsgdeleteOpen, setIsMsgdeleteOpen] = useState(false);

    const toggleMsg = () => {
        setIsMsgdeleteOpen(!isMsgdeleteOpen);
    };



    return (


        <div className="chat-section">
            <div className="chat-container">

                     <Navbar/> 

           

                <div className="chat-content">


                    {/* Sidebar Menu */}
                    <div className="content-sidebar">
                        <div className="content-sidebar-title">Chats</div>
                        <form action="" className="content-sidebar-form">
                            <input type="search" className="content-sidebar-input" placeholder="Search..." />
                            <button type="submit" className="content-sidebar-submit"><i className="ri-search-line"></i></button>
                        </form>
                        <div className="content-messages">
                            <ul class="content-messages-list">
                                <li class="content-message-title"><span>Recently</span></li>
                                <li>
                                    <a href="#" onClick={() => handleConversationClick(1)}>
                                        <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <span class="content-message-info">
                                            <span class="content-message-name">Someone</span>
                                            <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                        </span>
                                        <span class="content-message-more">
                                            <span class="content-message-unread">5</span>
                                            <span class="content-message-time">12:30</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                <a href="#">
                                        <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <span class="content-message-info">
                                            <span class="content-message-name">Someone</span>
                                            <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                        </span>
                                        <span class="content-message-more">
                                            <span class="content-message-time">12:30</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <span class="content-message-info">
                                            <span class="content-message-name">Someone</span>
                                            <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                        </span>
                                        <span class="content-message-more">
                                            <span class="content-message-unread">5</span>
                                            <span class="content-message-time">12:30</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <span class="content-message-info">
                                            <span class="content-message-name">Someone</span>
                                            <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                        </span>
                                        <span class="content-message-more">
                                            <span class="content-message-time">12:30</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <span class="content-message-info">
                                            <span class="content-message-name">Someone</span>
                                            <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                        </span>
                                        <span class="content-message-more">
                                            <span class="content-message-unread">5</span>
                                            <span class="content-message-time">12:30</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <span class="content-message-info">
                                            <span class="content-message-name">Someone</span>
                                            <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                        </span>
                                        <span class="content-message-more">
                                            <span class="content-message-time">12:30</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <span class="content-message-info">
                                            <span class="content-message-name">Someone</span>
                                            <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                        </span>
                                        <span class="content-message-more">
                                            <span class="content-message-time">12:30</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <span class="content-message-info">
                                            <span class="content-message-name">Someone</span>
                                            <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                        </span>
                                        <span class="content-message-more">
                                            <span class="content-message-time">12:30</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <span class="content-message-info">
                                            <span class="content-message-name">Someone</span>
                                            <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                        </span>
                                        <span class="content-message-more">
                                            <span class="content-message-time">12:30</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <span class="content-message-info">
                                            <span class="content-message-name">Someone</span>
                                            <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                        </span>
                                        <span class="content-message-more">
                                            <span class="content-message-time">12:30</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <span class="content-message-info">
                                            <span class="content-message-name">Someone</span>
                                            <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                        </span>
                                        <span class="content-message-more">
                                            <span class="content-message-time">12:30</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <span class="content-message-info">
                                            <span class="content-message-name">Someone</span>
                                            <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                        </span>
                                        <span class="content-message-more">
                                            <span class="content-message-time">12:30</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <span class="content-message-info">
                                            <span class="content-message-name">Someone</span>
                                            <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                        </span>
                                        <span class="content-message-more">
                                            <span class="content-message-time">12:30</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img class="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <span class="content-message-info">
                                            <span class="content-message-name">Someone</span>
                                            <span class="content-message-text">Lorem ipsum dolor sit amet consectetur.</span>
                                        </span>
                                        <span class="content-message-more">
                                            <span class="content-message-time">12:30</span>
                                        </span>
                                    </a>
                                </li>
                            </ul>


                        </div>
                    </div>

                    {/* Sidebar Menu End */}



                    {/* Default view when no chats is selected End */}



                    {/* Main Conversation Section Starts Here  */}

                    {activeConversation ? (
                        <div className={`conversation ${activeConversation ? 'active' : ''}`} id={`conversation-${activeConversation}`}>
                            <div className="conversation-top">
                                <button type="button" className="conversation-back" onClick={() => setActiveConversation(null)}>
                                    <i className="ri-arrow-left-line"></i>
                                </button>
                                <div className="conversation-user">
                                    <img className="conversation-user-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Someone" />
                                    <div>
                                        <div className="conversation-user-name">Someone</div>
                                        <div className="conversation-user-status online">online</div>
                                    </div>
                                </div>
                                <div className="conversation-buttons">
                                    <button type="button"><i className="ri-phone-fill"></i></button>
                                    <button type="button"><i className="ri-vidicon-line"></i></button>
                                    <button type="button"><i className="ri-information-line"></i></button>
                                </div>
                            </div>

                            <div className="conversation-main">
                                <ul className="conversation-wrapper">
                                    <div className="coversation-divider"><span>Today</span></div>
                                    {/* Render conversation messages */}
                                    <li className="conversation-item me">
                                        <div className="conversation-item-side">
                                            <img className="conversation-item-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Me" />
                                        </div>
                                        <div className="conversation-item-content">
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>ALorem ipsum dolor sit, amet consectetur adipisicing elit. Amet natus repudiandae quisquam sequi nobis suscipit consequatur rerum alias odio repellat!</p>
                                                        <div className="conversation-item-time">12:30</div>
                                                    </div>
                                                    <div className={`conversation-item-dropdown ${isMsgdeleteOpen ? 'active' : ''}`}>
                                                        <button type="button" className="conversation-item-dropdown-toggle"  onClick={toggleMsg}><i className="ri-more-2-line"></i></button>
                                                        <ul className="conversation-item-dropdown-list">
                                                          
                                                            <li><a href="#"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </li>
                                    <li className="conversation-item">
                                        <div className="conversation-item-side">
                                            <img className="conversation-item-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="conversation-item-content">
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                        <div className="conversation-item-time">12:30</div>
                                                    </div>
                                                    <div className={`conversation-item-dropdown ${isMsgdeleteOpen ? 'active' : ''}`}>
                                                        <button type="button" className="conversation-item-dropdown-toggle"  onClick={toggleMsg}><i className="ri-more-2-line"></i></button>
                                                        <ul className="conversation-item-dropdown-list">
                                                          
                                                            <li><a href="#"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eos ab in?</p>
                                                        <div className="conversation-item-time">12:30</div>
                                                    </div>
                                                    <div className={`conversation-item-dropdown ${isMsgdeleteOpen ? 'active' : ''}`}>
                                                        <button type="button" className="conversation-item-dropdown-toggle"  onClick={toggleMsg}><i className="ri-more-2-line"></i></button>
                                                        <ul className="conversation-item-dropdown-list">
                                                          
                                                            <li><a href="#"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, debitis. Iste natus est aliquam ipsum doloremque fugiat, quidem eos autem? Dolor quisquam laboriosam enim cum laborum suscipit perferendis adipisci praesentium.</p>
                                                        <div className="conversation-item-time">12:30</div>
                                                    </div>
                                                    <div className={`conversation-item-dropdown ${isMsgdeleteOpen ? 'active' : ''}`}>
                                                        <button type="button" className="conversation-item-dropdown-toggle"  onClick={toggleMsg}><i className="ri-more-2-line"></i></button>
                                                        <ul className="conversation-item-dropdown-list">
                                                          
                                                            <li><a href="#"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="conversation-item me">
                                        <div className="conversation-item-side">
                                            <img className="conversation-item-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="conversation-item-content">
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, eos, magni temporibus, placeat consectetur nobis incidunt dicta a culpa vel esse. Facilis fugiat possimus eveniet accusamus dignissimos pariatur inventore animi rem vero, eligendi obcaecati fugit quaerat? Officia ex quod eaque maxime ipsam, tempore error laboriosam laborum, magnam ipsum doloremque quas.</p>
                                                        <div className="conversation-item-time">12:30</div>
                                                    </div>
                                                    <div className={`conversation-item-dropdown ${isMsgdeleteOpen ? 'active' : ''}`}>
                                                        <button type="button" className="conversation-item-dropdown-toggle"  onClick={toggleMsg}><i className="ri-more-2-line"></i></button>
                                                        <ul className="conversation-item-dropdown-list">
                                                          
                                                            <li><a href="#"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus debitis odio maiores perferendis ipsa repudiandae amet blanditiis quod. Ullam, dolorum.</p>
                                                        <div className="conversation-item-time">12:30</div>
                                                    </div>
                                                    <div className={`conversation-item-dropdown ${isMsgdeleteOpen ? 'active' : ''}`}>
                                                        <button type="button" className="conversation-item-dropdown-toggle"  onClick={toggleMsg}><i className="ri-more-2-line"></i></button>
                                                        <ul className="conversation-item-dropdown-list">
                                                          
                                                            <li><a href="#"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium blanditiis ea, voluptatum, eveniet at harum minima maxime enim aut non, iure expedita excepturi tempore nostrum quasi natus voluptas dolore ducimus!</p>
                                                        <div className="conversation-item-time">12:30</div>
                                                    </div>
                                                    <div className={`conversation-item-dropdown ${isMsgdeleteOpen ? 'active' : ''}`}>
                                                        <button type="button" className="conversation-item-dropdown-toggle"  onClick={toggleMsg}><i className="ri-more-2-line"></i></button>
                                                        <ul className="conversation-item-dropdown-list">
                                                          
                                                            <li><a href="#"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="conversation-item">
                                        <div className="conversation-item-side">
                                            <img className="conversation-item-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                        </div>
                                        <div className="conversation-item-content">
                                        
                                     
                                            <div className="conversation-item-wrapper">
                                                <div className="conversation-item-box">
                                                    <div className="conversation-item-text">
                                                        <p>PLorem ipsum dolor sit amet consectetur adipisicing elit. Sint, debitis. Iste natus est aliquam ipsum doloremque fugiat, quidem eos autem? Dolor quisquam laboriosam enim cum laborum suscipit perferendis adipisci praesentium.</p>
                                                        <div className="conversation-item-time">12:30</div>
                                                    </div>
                                                    <div className={`conversation-item-dropdown ${isMsgdeleteOpen ? 'active' : ''}`}>
                                                        <button type="button" className="conversation-item-dropdown-toggle"  onClick={toggleMsg}><i className="ri-more-2-line"></i></button>
                                                        <ul className="conversation-item-dropdown-list">
                                                          
                                                            <li><a href="#"><i className="ri-delete-bin-line"></i> Delete</a></li>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>




                                </ul>
                            </div>

                            <div className="conversation-form">
                                <button type="button" className="conversation-form-button"><i className="ri-emotion-line"></i></button>
                                <div className="conversation-form-group">
                                    <textarea className="conversation-form-input" rows="1" placeholder="Type here..."></textarea>
                                    <button type="button" className="conversation-form-record"><i className="ri-mic-line"></i></button>
                                </div>
                                <button type="button" className="conversation-form-button conversation-form-submit"><i className="ri-send-plane-2-line"></i></button>
                            </div>
                        </div>
                    ) : (
                        /* Default view when no chats is selected */
                        <div className="conversation conversation-default active">
                            <i className="ri-chat-3-line"></i>
                            <p>Select chat and view conversation!</p>
                        </div>
                    )}





                    {/* Main Conversation Section Ends Here  */}


                </div>

            </div>
        </div>
    )
}

export default Chat