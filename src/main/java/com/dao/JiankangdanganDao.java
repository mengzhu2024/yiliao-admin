package com.dao;

import com.entity.JiankangdanganEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.JiankangdanganVO;
import com.entity.view.JiankangdanganView;


/**
 * 健康档案
 *
 */
public interface JiankangdanganDao extends BaseMapper<JiankangdanganEntity> {

	List<JiankangdanganVO> selectListVO(@Param("ew") Wrapper<JiankangdanganEntity> wrapper);

	JiankangdanganVO selectVO(@Param("ew") Wrapper<JiankangdanganEntity> wrapper);

	List<JiankangdanganView> selectListView(@Param("ew") Wrapper<JiankangdanganEntity> wrapper);

	List<JiankangdanganView> selectListView(Pagination page,@Param("ew") Wrapper<JiankangdanganEntity> wrapper);

	JiankangdanganView selectView(@Param("ew") Wrapper<JiankangdanganEntity> wrapper);

}
