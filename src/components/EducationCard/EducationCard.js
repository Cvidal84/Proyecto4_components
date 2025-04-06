import "./EducationCard.css"

export const EducationCard = (edu) => `
  <div class="education-card">
    <img src="${edu.image}" alt="${edu.degree}" class="education-image" />
    <div class="education-info">
      <h3>${edu.degree}</h3>
      <p><strong>${edu.university}</strong></p>
      <p>${edu.location}</p>
      <p>${edu.graduationYear}</p>
    </div>
  </div>
`;