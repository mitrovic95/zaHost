package dm.pozoristePromena.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import dm.pozoristePromena.model.Slike;


@Component
public interface SlikeRepository extends JpaRepository<Slike, Long>{
	
	Optional<Slike> findById(Long id);

}
