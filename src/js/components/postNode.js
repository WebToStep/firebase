export const postNode = (key, {textPost, likeCount, postImage, timestamp, userAvatar, userName}) => {
   return `
            <div class="post" data-id="${key}">
            <div class="post-header">
            <div class="user">
               <img class="user-avatar" src="${userAvatar}" alt="avatar"/>
               <div class="post-info">
                  <a href="#" class="post-author">${userName}</a>
                  <div class="post-info-time">
                  <span class="post-time">${new Date(timestamp).toLocaleTimeString().slice(0, -3)}</span>
                  <svg width="14" height="14" class="setting-icon">
                     <use xlink:href="img/icons.svg#setting"></use>
                  </svg>
                  </div>
               </div>
            </div>
            <button class="post-header-button">
               <svg width="24" height="24" class="post-button-icon">
                  <use xlink:href="img/icons.svg#dots"></use>
               </svg>
            </button>
            <ul class="list-questions-post hide">
               <li data-effect="edit">Редактировать</li>
               <li data-effect="deleted">Удалить</li>
            </ul>
            </div>
            <!-- /.post-header -->
            <div class="post-content">
            <p class="post-text">
               ${textPost}
            </p>
            <button class="edit-button hide">Save</button>
            ${postImage && `<img src="${postImage}" alt="post-image" class="post-image"/>`}
            </div>
            <!-- /.post-content -->
            <div class="likes">
            <svg width="16" height="16" class="likes-icon">
               <use xlink:href="img/icons.svg#like-active"></use>
            </svg>
            <span class="likes-counter">${likeCount}</span>
            </div>
            <!-- /.likes -->
            <div class="post-footer">
            <button class="post-button">
               <svg width="24" height="24" class="post-button-icon">
                  <use xlink:href="img/icons.svg#like"></use>
               </svg>
               <span class="post-button-text">Like</span>
            </button>
            <button class="post-button">
               <svg width="24" height="24" class="post-button-icon">
                  <use xlink:href="img/icons.svg#chat"></use>
               </svg>
               <span class="post-button-text">Comment</span>
            </button>
            <button class="post-button">
               <svg width="24" height="24" class="post-button-icon">
                  <use xlink:href="img/icons.svg#share"></use>
               </svg>
               <span class="post-button-text">Share</span>
            </button>
            </div>
            <!-- /.post-footer -->
         </div>
   `
}