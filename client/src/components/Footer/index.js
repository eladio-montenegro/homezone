import React from "react";
import "./style.css";

function Footer({ children}) {
  return (
  
      <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Thanks for Stopping By!</h5>
                <p class="grey-text text-lighten-4">Come back for more updates to this project.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Follow us on GitHub</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Eladio's GitHub</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Lotus' GitHub</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Jennifer's GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2019 Elojen
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
  

  );
}

export default Footer;
