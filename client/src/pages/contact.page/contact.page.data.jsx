export default function ContactPageData() {
    return (
        <div className="ContactPageDataContainer">
            <div className="ContactTopSection">
                <h2>📇 Contacts</h2>
                <div className="ContactTopItemsRow">
                    <div className="ContactItem">
                        <h3>📞 Phone</h3>
                        <p>+380982571771</p>
                    </div>
                    <div className="ContactItem">
                        <h3>📧 Email</h3>
                        <p>mrkopir@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="ContactBottomRow">
                <div className="MessengerColumn">
                    <h2>📱 Messengers</h2>
                    <p>💬 Telegram</p>
                    <p>📲 Viber</p>
                </div>
                <div className="SocialColumn">
                    <h2>🌍 Social Networks</h2>
                    <div className="SocialColumnRow">
                        <div>
                            <p>📸 Instagram</p>
                            <p>💼 LinkedIn</p>
                        </div>
                        <div>
                            <p>🐱 GitHub</p>
                            <p>📘 Facebook</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
