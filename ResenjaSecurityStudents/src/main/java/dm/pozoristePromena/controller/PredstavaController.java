package dm.pozoristePromena.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dm.pozoristePromena.dto.PredstavaDTO;
import dm.pozoristePromena.model.Predstava;
import dm.pozoristePromena.service.PredstavaService;

@RestController
@RequestMapping("/api/predstava")
public class PredstavaController {
	
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	private PredstavaService predstavaService;

//    @PreAuthorize("isAuthenticated()")
	@GetMapping
	public ResponseEntity<List<PredstavaDTO>> getPredstavaPage() {
		final List<PredstavaDTO> retVal = predstavaService.findAll().stream().map(PredstavaDTO::new)
				.collect(Collectors.toList());

		return new ResponseEntity<>(retVal, HttpStatus.OK);
	}

//	@PreAuthorize("isAuthenticated()")
	@GetMapping("/{id}")
	public ResponseEntity<PredstavaDTO> getPredstava(@PathVariable Long id) {
		final Predstava predstava = predstavaService.findOne(id);

		if (predstava == null) {
			return new ResponseEntity<PredstavaDTO>(HttpStatus.NOT_FOUND);
		}

		final PredstavaDTO predstavaDTO = new PredstavaDTO(predstava);
		return new ResponseEntity<>(predstavaDTO, HttpStatus.OK);
	}
	

	@PreAuthorize("hasAnyAuthority('ADMIN')")
	@PostMapping
	public ResponseEntity<String> createNewPredstava(@RequestBody Predstava predstava) {
		final Optional<Predstava> checkPredstava = predstavaService.findById(predstava.getId());
		if (checkPredstava.isPresent()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} else if (predstava.getId() == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		predstavaService.save(predstava);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@PreAuthorize("hasAnyAuthority('ADMIN')")
	@PutMapping("/{id}")
	public ResponseEntity<String> updatePredstava(@PathVariable Long id, @RequestBody Predstava predstava) {
		final Predstava foundPredstava = predstavaService.findOne(id);
		if (foundPredstava == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		foundPredstava.setOpis(predstava.getOpis());
		foundPredstava.setNaslov(predstava.getNaslov());
		foundPredstava.setSlike(predstava.getSlike());
		foundPredstava.setSlika(predstava.getSlika());
		foundPredstava.setVideo(predstava.getVideo());
		foundPredstava.setOsoba(predstava.getOsoba());
		predstavaService.save(foundPredstava);
		return new ResponseEntity<>(HttpStatus.OK);

	}

	@PreAuthorize("hasAnyAuthority('ADMIN')")
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletePredstava(@PathVariable Long id) {
		final Predstava foundPredstava = predstavaService.findOne(id);
		if (foundPredstava == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		predstavaService.remove(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
