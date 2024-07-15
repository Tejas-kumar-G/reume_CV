document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Expand/Collapse Sections
    document.querySelectorAll('section h2').forEach(header => {
        header.addEventListener('click', () => {
            const sectionContent = header.nextElementSibling;
            sectionContent.style.display = sectionContent.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Hover effect for profile photo
    const profilePhoto = document.querySelector('.profile-photo');
    profilePhoto.addEventListener('mouseover', () => {
        profilePhoto.style.transform = 'scale(1.1)';
        profilePhoto.style.transition = 'transform 0.3s ease';
    });
    profilePhoto.addEventListener('mouseout', () => {
        profilePhoto.style.transform = 'scale(1)';
    });
});