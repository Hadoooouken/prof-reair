import face4 from '../../images/users/face4.png';
import face5 from '../../images/users/face5.png';
import face6 from '../../images/users/face6.png';

const images = {
  'face4.png': face4,
  'face5.png': face5,
  'face6.png': face6,
  'face7.png': face4,
  'face8.png': face5,
  'face9.png': face6,
};

export const reviews = () => {
  const reviewsSection = document.querySelector('#reviews');
  const commentsContainer = reviewsSection.querySelector('.comments-container');
  const loader = reviewsSection.querySelector('.comments-loader');

  const addPreloader = () => {
    loader?.classList.remove('hidden');
  };

  const removePreloader = () => {
    loader?.classList.add('hidden');
  };

  const renderComments = (commentsArray) => {
    return commentsArray.map((comment, index) => {
      if (index % 2 === 0) {
        return `
              <div class="review-margin-bottom row comment-item">
                <div class="col-xs-3 col-sm-3">
                  <div class="review-user">
                    <img src="${images[comment.image] || ''}" alt="" class="img-responsive avatar">
                  </div>
                </div>

                <div class="col-xs-9 col-sm-9">
                  <div class="review-inner ${comment.color} review-arrow review-arrow-left">
                    <p class="text-normal">${comment.author}</p>
                    <p>${comment.comment}</p>
                  </div>
                </div>
              </div>
            `;
      } else {
        return `
              <div class="review-margin-bottom row comment-item">
                <div class="col-xs-9 col-sm-9">
                  <div class="review-inner ${comment.color} review-arrow review-arrow-right">
                    <p class="text-normal">${comment.author}</p>
                    <p>${comment.comment}</p>
                  </div>
                </div>

                <div class="col-xs-3 col-sm-3">
                  <div class="review-user">
                    <img src="${images[comment.image] || ''}" alt="" class="img-responsive avatar">
                  </div>
                </div>
              </div>
            `;
      }
    });
  };

  commentsContainer.innerHTML = '';

  addPreloader();

  fetch('./comments.json')
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Ошибка загрузки комментариев: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      const comments = data.comments;
      
      commentsContainer.insertAdjacentHTML('beforeend', `${renderComments(comments.slice(0, 3))}`);
    })

    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      removePreloader();
    });
};
