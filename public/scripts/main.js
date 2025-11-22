async function loadCourses() {
  const output = document.getElementById('courses-output');
  const errorBox = document.getElementById('courses-error');

  output.innerHTML = '';
  errorBox.textContent = '';

  try {
    const response = await fetch('/api/courses');
    if (!response.ok) throw new Error('Network Error ' + response.status);

    const courses = await response.json();

    const list = document.createElement('div');
    list.classList.add('cards-grid');

    courses.forEach(course => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <h3>${course.code} – ${course.title}</h3>
        <p><b>Semester:</b> ${course.semester}</p>
        <p><b>Delivery:</b> ${course.delivery}</p>
        <p><b>Instructor:</b> ${course.instructor}</p>
      `;

      list.appendChild(card);
    });

    output.appendChild(list);

  } catch (err) {
    errorBox.textContent = "Failed to load courses.";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("load-courses-btn");
  if (btn) btn.addEventListener("click", loadCourses);
});
