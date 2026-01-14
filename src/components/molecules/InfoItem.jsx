export const InfoItem = ({ icon, title, text }) => {
    <div className="info-item">
        <div clasName="icon-info"> {icon}</div>
        <div>
            <h2>{title}</h2>
            <p className="intro-text">{text}</p>
        </div>
    </div>
};