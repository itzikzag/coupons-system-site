package beans;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;


import core.javaBeans.Coupon;
import core.javaBeans.CouponType;


@XmlRootElement
public class CouponWeb implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private long id;
	private String title;
	private Date startDate;
	private Date endDate;
	private int amount;
	private CouponType type;
	private String message;
	private double price;
	private String image;

	public CouponWeb() {

	}

	public  CouponWeb(Coupon c){
		this.id = c.getId();
		this.title = c.getTitle();
		this.startDate = c.getStartDate();
		this.endDate = c.getEndDate();
		this.amount = c.getAmount();
		this.type = c.getType();
		this.message = c.getMessage();
		this.price = c.getPrice();
		this.image = c.getImage();
	}
	
	
	
	
	
	public Coupon changeToCoupon(){
	Coupon coupon= new Coupon();
	coupon.setId(this.id);
	coupon.setTitle(this.title);
		coupon.setStartDate(this.startDate);
		coupon.setEndDate(this.endDate);
		coupon.setAmount(this.amount);
		coupon.setType(this.type);
		coupon.setMessage(this.message);
		coupon.setPrice(this.price);
		coupon.setImage(this.image);
		return	coupon;
	}
	
	public Collection<CouponWeb> changeToCouponsWeb(Collection<Coupon>coupons){
		List<CouponWeb>couponsList = new ArrayList<>();
		for (Coupon coupon: coupons) {
			CouponWeb c = new CouponWeb(coupon);
couponsList.add(c);
		}
		return couponsList;
	}
	public Collection<Coupon> changeToCoupons(Collection<CouponWeb>coupons){
		List<Coupon>couponsList = new ArrayList<>();
		for (CouponWeb coupon: coupons) {
			Coupon c = new Coupon();
			coupon.setId(coupon.id);
			coupon.setTitle(coupon.title);
				c.setStartDate(coupon.startDate);
				c.setEndDate(coupon.endDate);
				c.setAmount(coupon.amount);
				c.setType(coupon.type);
				c.setMessage(coupon.message);
				c.setPrice(coupon.price);
				c.setImage(coupon.image);
couponsList.add(c);
		}
		return couponsList;
	}
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public CouponType getType() {
		return type;
	}

	public void setType(CouponType type) {
		this.type = type;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Coupon [id=" + id + ", title=" + title + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", amount=" + amount + ", type=" + type + ", message=" + message + ", price=" + price + ", image="
				+ image + "]";
	}

}
