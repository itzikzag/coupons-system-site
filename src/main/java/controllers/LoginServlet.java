package controllers;

import java.io.IOException;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import core.Exceptions.CouponSystemException;
import core.couponSystemSingleton.ClientType;
import core.couponSystemSingleton.CouponSystem;
import core.facades.CouponClientFacade;


@Controller
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
	
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */

		@RequestMapping(value = "/servlet", method = RequestMethod.POST)
		public void doPost(HttpServletResponse response, HttpServletRequest request, @RequestParam String userName,
				@RequestParam String password, @RequestParam ClientType clientType) throws IOException {
			switch (clientType) {
			case Admin:
				CouponClientFacade adminFacade = null;
				try {
					try {
						adminFacade = CouponSystem.getInstance().login(userName, password, clientType);
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					request.getSession().setAttribute("facade", adminFacade);
					request.getSession().setAttribute("authenticated", true);
				
					} catch (CouponSystemException e) {
					response.sendRedirect("/ErrorPage.html");
				}
				if (adminFacade != null) {
					response.sendRedirect("/couponsSystemWeb/admin/index.html");
				}

				break;

			case Company:
				CouponClientFacade companyFacade = null;
				try {
					try {
						companyFacade = CouponSystem.getInstance().login(userName, password, clientType);
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					request.getSession().setAttribute("facade", companyFacade);
					request.getSession().setAttribute("authenticated", true);
					request.getSession().setAttribute("username", userName);
				} catch (CouponSystemException e) {
					response.sendRedirect("/ErrorPage.html");
				}
				if (companyFacade != null) {
					response.sendRedirect("/couponsSystemWeb/company/index.html");
				}
				break;

			case Customer:
				CouponClientFacade customerFacade = null;
				try {
					try {
						customerFacade = CouponSystem.getInstance().login(userName, password, clientType);
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					request.getSession().setAttribute("facade", customerFacade);
					request.getSession().setAttribute("authenticated", true);
					request.getSession().setAttribute("username", userName);
				
				} catch (CouponSystemException e) {
					response.sendRedirect("/ErrorPage.html");
				}
				if (customerFacade != null) {
					response.sendRedirect("/couponsSystemWeb/customer/index.html");
				}
				break;

			default:
				break;
			}

		}

}
