package travelstudio.dao;

import java.util.ArrayList;

import travelstudio.domain.Cowork;

public interface CoworkDao {
int invite(Cowork cowork);
int delete(Cowork cowork);
ArrayList<Cowork> coworkCheck(int mno);
}
