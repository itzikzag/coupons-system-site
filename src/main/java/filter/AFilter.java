package filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;

@WebFilter("/SessionAuthFilter")
public class AFilter implements Filter {

	public AFilter() {
	}

	public void destroy() {
	}

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {

		HttpServletRequest servletrequest = (HttpServletRequest) request;
		HttpSession session = servletrequest.getSession();
		boolean authenticated = true;

		if (session.getAttribute("authenticated") != null) {
			authenticated = (boolean) session.getAttribute("authenticated");
		}else{
			authenticated=false;
		}

		if (authenticated) {
			chain.doFilter(request, response);

		} else {
			HttpServletResponse servletresponse = (HttpServletResponse) response;
			servletresponse.sendError(HttpStatus.UNAUTHORIZED.value(),
					"this page is Blocked because you need to login properly!!!!");

		}
	}

	public void init(FilterConfig fConfig) throws ServletException {
	}

}