package com.entity.vo;

import com.entity.YiliaodituEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;


/**
 * 医疗地图
 * 手机端接口返回实体辅助类
 * （主要作用去除一些不必要的字段）
 */
public class YiliaodituVO  implements Serializable {
	private static final long serialVersionUID = 1L;


	/**
	 * 地区
	 */

	private String diqu;

	/**
	 * 类型
	 */

	private String leixing;

	/**
	 * 图片
	 */

	private String tupian;

	/**
	 * 详情
	 */

	private String xiangqing;

	/**
	 * 经度
	 */

	private Float longitude;

	/**
	 * 纬度
	 */

	private Float latitude;

	/**
	 * 地址
	 */

	private String fulladdress;


	/**
	 * 设置：地区
	 */

	public void setDiqu(String diqu) {
		this.diqu = diqu;
	}

	/**
	 * 获取：地区
	 */
	public String getDiqu() {
		return diqu;
	}


	/**
	 * 设置：类型
	 */

	public void setLeixing(String leixing) {
		this.leixing = leixing;
	}

	/**
	 * 获取：类型
	 */
	public String getLeixing() {
		return leixing;
	}


	/**
	 * 设置：图片
	 */

	public void setTupian(String tupian) {
		this.tupian = tupian;
	}

	/**
	 * 获取：图片
	 */
	public String getTupian() {
		return tupian;
	}


	/**
	 * 设置：详情
	 */

	public void setXiangqing(String xiangqing) {
		this.xiangqing = xiangqing;
	}

	/**
	 * 获取：详情
	 */
	public String getXiangqing() {
		return xiangqing;
	}


	/**
	 * 设置：经度
	 */

	public void setLongitude(Float longitude) {
		this.longitude = longitude;
	}

	/**
	 * 获取：经度
	 */
	public Float getLongitude() {
		return longitude;
	}


	/**
	 * 设置：纬度
	 */

	public void setLatitude(Float latitude) {
		this.latitude = latitude;
	}

	/**
	 * 获取：纬度
	 */
	public Float getLatitude() {
		return latitude;
	}


	/**
	 * 设置：地址
	 */

	public void setFulladdress(String fulladdress) {
		this.fulladdress = fulladdress;
	}

	/**
	 * 获取：地址
	 */
	public String getFulladdress() {
		return fulladdress;
	}

}
